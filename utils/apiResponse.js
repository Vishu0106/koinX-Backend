class ApiResponse {
    constructor(data = {}) {
        Object.assign(this, {
            ...data
        });
    }
}

export { ApiResponse }