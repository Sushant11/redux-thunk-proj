import {httpBase} from "./httpBase";

export function fetch(endpoint, params) {
    return httpBase().get(`/${endpoint}`, { params });
}

export function store(endpoint, data) {
    return httpBase().post(`/${endpoint}`, data);
}
