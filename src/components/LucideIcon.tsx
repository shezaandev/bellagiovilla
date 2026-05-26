import React from "react";
import {
  Waves,
  Sprout,
  ChefHat,
  UtensilsCrossed,
  Flame,
  Wifi,
  Snowflake,
  Car,
  Tv,
  Coffee,
  Dices,
  Music,
  PawPrint,
  PlaneTakeoff,
  KeyRound,
  Users,
  BedDouble,
  Home,
  Heart,
  Sparkles,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Copy,
  Check,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Compass
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Sprout,
  ChefHat,
  UtensilsCrossed,
  Flame,
  Wifi,
  Snowflake,
  Car,
  Tv,
  Coffee,
  Dices,
  Music,
  PawPrint,
  PlaneTakeoff,
  KeyRound,
  Users,
  BedDouble,
  Home,
  Heart,
  Sparkles,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
  Copy,
  Check,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Compass
};

interface LucideIconProps {
  name: string;
  className?: string;
}

export function LucideIcon({ name, className }: LucideIconProps) {
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) {
    // Fallback icon
    return <Compass className={className} />;
  }
  return <IconComponent className={className} />;
}
