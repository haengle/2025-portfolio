import { useState, useEffect } from "react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState(() => {
          const stored = localStorage.getItem('theme');
          return stored ? stored : 'normal';
        });

        function toggleTheme() {
            if (theme === 'normal') {
                setTheme('flip');
            } else {
                setTheme('normal');
            }
        };
        useEffect(() => {
            localStorage.setItem('theme', theme);
            document.body.className = theme;
        }, [theme]);

    return (
        <div className="toggle-switch">
            <label>
                <input type='checkbox' checked={theme === 'flip' ? 'checked' : ''} onChange={toggleTheme} />
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default ThemeToggle;