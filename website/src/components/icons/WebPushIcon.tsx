export default function WebPushIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" fill="#8B5CF6" />
      <path d="M26 16C22 16 18 18 18 22V30C18 34 14 38 14 38H42C42 38 38 34 38 30V22C38 18 34 16 30 16Z" fill="white" />
      <circle cx="30" cy="26" r="3" fill="#8B5CF6" />
      <path d="M22 42H34C34 46 32 50 28 50C24 50 22 46 22 42Z" fill="white" />
    </svg>
  );
}
