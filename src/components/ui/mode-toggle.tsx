import { Moon, Sun } from "lucide-react"

import { Button } from "./button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <Button
            onClick={toggleTheme}
            className="bg-background text-foreground hover:bg-background hover:text-foreground"
        >
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700" />
            )}
        </Button>

    )
}