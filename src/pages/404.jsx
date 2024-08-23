import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1 className="font-bold">Oops! 😢</h1>
            <p>
                Sepertinya kita ada di halaman yang salah... Sama seperti perasaan yang tak berbalas, halaman ini tak ditemukan.
            </p>
            <p>
                Mungkin ini hanya sementara, atau bisa jadi kita perlu mencari arah yang benar.
            </p>
            <i>Error: {error.statusText || error.message}</i>
        </div>
    );
};

export default ErrorPage;
