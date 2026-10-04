export interface TargetProfile {
  role: string;
  desc: string;
  tag: string;
}

export interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  trigger: boolean;
}
