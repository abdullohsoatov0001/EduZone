const CheckEmail = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Проверь почту 📩
                </h2>
                <div className="text-gray-600">
                    <p>Мы отправили ссылку для подтверждения email.</p>
                    <b>Если вы нажали на ссылку, то можете войти в аккаунт </b>
                </div>
                <button
                    onClick={() => window.location.href = "/login"}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl"
                >
                    Перейти к входу
                </button>

            </div>
        </div>
    );
};

export default CheckEmail;
