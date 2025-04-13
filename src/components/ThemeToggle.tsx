
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full p-2"
    >
      {theme === 'dark' ? (
        <Sun className="size-[1.2rem] text-yellow-300" />
      ) : (
        <Moon className="size-[1.2rem] text-slate-700" />
      )}
    </Button>
  );
}
