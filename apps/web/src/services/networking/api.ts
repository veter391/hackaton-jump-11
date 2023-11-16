/* eslint-disable @typescript-eslint/ban-types */
const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL ?? "http://localhost:8080"

export function API<T extends Record<string, unknown>>(path: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', data?: Object, headers?: Record<string, string>, server = API_SERVER_URL) {
    const reqHeaders = {
        'Content-Type': 'application/json',
        ...headers
    };

    let requestOptions: {method: string, headers: Record<string, string>, body?: string} = {
        method,
        headers: reqHeaders,
    };

    if (['POST', 'PUT'].includes(method)) {
        requestOptions = {
            ...requestOptions,
            body: JSON.stringify(data ?? {})
        }
    }

    return fetch(server + path, requestOptions)
        .then((response) => {
            if (!response.ok) {
                const responseObj = {
                    status: 'rejected',
                    statusCode: response.status,
                    url: response.url,
                    statusText: response.statusText
                }
                throw Error(JSON.stringify(responseObj));
            }
            return response
        })
        .then(response => response.json() as unknown as T)
}

export function UploadFile(path: string, formData: FormData, server = API_SERVER_URL): Promise<unknown> {
    return fetch(server + path, {
        method: 'POST',
        body: formData
    })
}