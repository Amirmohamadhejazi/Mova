import './globals.css';
import { yekan } from '../../public/utils/font/font';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl" className={yekan.variable}>
            <body>{children}</body>
        </html>
    );
}

