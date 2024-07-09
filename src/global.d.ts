// src/global.d.ts

interface Telegram {
    WebApp: {
        initDataUnsafe: {
            user: {
                id: number;
                first_name: string;
                last_name?: string;
                username?: string;
                language_code: string;
            };
        };
        expand: () => void;
        sendData: (data: string) => void;
    };
}

interface Window {
    Telegram: Telegram;
}
