function send(response, status, data) {
    response.status(status).json(data);
}

exports.send = send;

exports.internalErr = response => {
    send(response, 500, {
        message: "Internal Server Error"
    });
};

exports.noContent = response => {
    response.status(204);
    response.header('Content-Length', 0);
    response.send();
};

exports.notFound = (response, data = null) => {
    response.status(404);

    if (!data) {
        response.json({
            message: 'Not Found'
        });
        return;
    }

    response.json(data);
};