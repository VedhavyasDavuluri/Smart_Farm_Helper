
-- Create a table for farm fields/plots
CREATE TABLE public.farm_fields (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  size_acres DECIMAL(10,2),
  soil_type TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for crop records
CREATE TABLE public.crop_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  field_id UUID REFERENCES public.farm_fields(id) ON DELETE CASCADE,
  crop_name TEXT NOT NULL,
  crop_name_telugu TEXT,
  variety TEXT,
  sowing_date DATE,
  expected_harvest_date DATE,
  actual_harvest_date DATE,
  area_planted DECIMAL(10,2),
  seed_quantity DECIMAL(10,2),
  seed_cost DECIMAL(10,2),
  status TEXT DEFAULT 'planted' CHECK (status IN ('planned', 'planted', 'growing', 'harvested', 'sold')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for harvest records
CREATE TABLE public.harvest_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  crop_record_id UUID REFERENCES public.crop_records(id) ON DELETE CASCADE,
  harvest_date DATE NOT NULL,
  quantity_harvested DECIMAL(10,2) NOT NULL,
  unit TEXT DEFAULT 'quintals',
  quality_grade TEXT,
  market_price DECIMAL(10,2),
  total_income DECIMAL(10,2),
  storage_location TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for farm activities/records
CREATE TABLE public.farm_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  crop_record_id UUID REFERENCES public.crop_records(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('fertilizing', 'irrigation', 'pest_control', 'weeding', 'soil_preparation', 'other')),
  activity_date DATE NOT NULL,
  description TEXT NOT NULL,
  cost DECIMAL(10,2),
  materials_used TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a table for user preferences (expanding beyond what's in localStorage)
CREATE TABLE public.user_preferences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  language TEXT DEFAULT 'te',
  preferred_units TEXT DEFAULT 'metric',
  default_currency TEXT DEFAULT 'INR',
  weather_location TEXT,
  notification_weather BOOLEAN DEFAULT true,
  notification_market BOOLEAN DEFAULT true,
  notification_reminders BOOLEAN DEFAULT true,
  notification_sms BOOLEAN DEFAULT false,
  theme TEXT DEFAULT 'light',
  farm_size_acres DECIMAL(10,2),
  years_experience INTEGER,
  phone TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.farm_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.harvest_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.farm_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for farm_fields
CREATE POLICY "Users can view their own farm fields" 
  ON public.farm_fields 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own farm fields" 
  ON public.farm_fields 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own farm fields" 
  ON public.farm_fields 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own farm fields" 
  ON public.farm_fields 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for crop_records
CREATE POLICY "Users can view their own crop records" 
  ON public.crop_records 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own crop records" 
  ON public.crop_records 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own crop records" 
  ON public.crop_records 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own crop records" 
  ON public.crop_records 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for harvest_records
CREATE POLICY "Users can view their own harvest records" 
  ON public.harvest_records 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own harvest records" 
  ON public.harvest_records 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own harvest records" 
  ON public.harvest_records 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own harvest records" 
  ON public.harvest_records 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for farm_activities
CREATE POLICY "Users can view their own farm activities" 
  ON public.farm_activities 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own farm activities" 
  ON public.farm_activities 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own farm activities" 
  ON public.farm_activities 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own farm activities" 
  ON public.farm_activities 
  FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for user_preferences
CREATE POLICY "Users can view their own preferences" 
  ON public.user_preferences 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own preferences" 
  ON public.user_preferences 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences" 
  ON public.user_preferences 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create function to automatically create user preferences when a profile is created
CREATE OR REPLACE FUNCTION public.handle_new_user_preferences()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_preferences (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create user preferences
CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user_preferences();
