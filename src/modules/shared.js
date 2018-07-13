export function loading(type) {
    return {
        type: type
    };
}

export function failure(type, error) {
    return {
        type: type,
        error: error
    };
}