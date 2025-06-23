export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      crop_records: {
        Row: {
          actual_harvest_date: string | null
          area_planted: number | null
          created_at: string
          crop_name: string
          crop_name_telugu: string | null
          expected_harvest_date: string | null
          field_id: string | null
          id: string
          notes: string | null
          seed_cost: number | null
          seed_quantity: number | null
          sowing_date: string | null
          status: string | null
          updated_at: string
          user_id: string
          variety: string | null
        }
        Insert: {
          actual_harvest_date?: string | null
          area_planted?: number | null
          created_at?: string
          crop_name: string
          crop_name_telugu?: string | null
          expected_harvest_date?: string | null
          field_id?: string | null
          id?: string
          notes?: string | null
          seed_cost?: number | null
          seed_quantity?: number | null
          sowing_date?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
          variety?: string | null
        }
        Update: {
          actual_harvest_date?: string | null
          area_planted?: number | null
          created_at?: string
          crop_name?: string
          crop_name_telugu?: string | null
          expected_harvest_date?: string | null
          field_id?: string | null
          id?: string
          notes?: string | null
          seed_cost?: number | null
          seed_quantity?: number | null
          sowing_date?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
          variety?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crop_records_field_id_fkey"
            columns: ["field_id"]
            isOneToOne: false
            referencedRelation: "farm_fields"
            referencedColumns: ["id"]
          },
        ]
      }
      farm_activities: {
        Row: {
          activity_date: string
          activity_type: string
          cost: number | null
          created_at: string
          crop_record_id: string | null
          description: string
          id: string
          materials_used: string | null
          notes: string | null
          user_id: string
        }
        Insert: {
          activity_date: string
          activity_type: string
          cost?: number | null
          created_at?: string
          crop_record_id?: string | null
          description: string
          id?: string
          materials_used?: string | null
          notes?: string | null
          user_id: string
        }
        Update: {
          activity_date?: string
          activity_type?: string
          cost?: number | null
          created_at?: string
          crop_record_id?: string | null
          description?: string
          id?: string
          materials_used?: string | null
          notes?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "farm_activities_crop_record_id_fkey"
            columns: ["crop_record_id"]
            isOneToOne: false
            referencedRelation: "crop_records"
            referencedColumns: ["id"]
          },
        ]
      }
      farm_fields: {
        Row: {
          created_at: string
          id: string
          location: string | null
          name: string
          size_acres: number | null
          soil_type: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          location?: string | null
          name: string
          size_acres?: number | null
          soil_type?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: string | null
          name?: string
          size_acres?: number | null
          soil_type?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      harvest_records: {
        Row: {
          created_at: string
          crop_record_id: string | null
          harvest_date: string
          id: string
          market_price: number | null
          notes: string | null
          quality_grade: string | null
          quantity_harvested: number
          storage_location: string | null
          total_income: number | null
          unit: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          crop_record_id?: string | null
          harvest_date: string
          id?: string
          market_price?: number | null
          notes?: string | null
          quality_grade?: string | null
          quantity_harvested: number
          storage_location?: string | null
          total_income?: number | null
          unit?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          crop_record_id?: string | null
          harvest_date?: string
          id?: string
          market_price?: number | null
          notes?: string | null
          quality_grade?: string | null
          quantity_harvested?: number
          storage_location?: string | null
          total_income?: number | null
          unit?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "harvest_records_crop_record_id_fkey"
            columns: ["crop_record_id"]
            isOneToOne: false
            referencedRelation: "crop_records"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          address: string | null
          created_at: string
          default_currency: string | null
          farm_size_acres: number | null
          id: string
          language: string | null
          notification_market: boolean | null
          notification_reminders: boolean | null
          notification_sms: boolean | null
          notification_weather: boolean | null
          phone: string | null
          preferred_units: string | null
          theme: string | null
          updated_at: string
          user_id: string
          weather_location: string | null
          years_experience: number | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          default_currency?: string | null
          farm_size_acres?: number | null
          id?: string
          language?: string | null
          notification_market?: boolean | null
          notification_reminders?: boolean | null
          notification_sms?: boolean | null
          notification_weather?: boolean | null
          phone?: string | null
          preferred_units?: string | null
          theme?: string | null
          updated_at?: string
          user_id: string
          weather_location?: string | null
          years_experience?: number | null
        }
        Update: {
          address?: string | null
          created_at?: string
          default_currency?: string | null
          farm_size_acres?: number | null
          id?: string
          language?: string | null
          notification_market?: boolean | null
          notification_reminders?: boolean | null
          notification_sms?: boolean | null
          notification_weather?: boolean | null
          phone?: string | null
          preferred_units?: string | null
          theme?: string | null
          updated_at?: string
          user_id?: string
          weather_location?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
