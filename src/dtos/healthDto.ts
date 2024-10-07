export interface HealthDto {
    status: string;
}

export const validateHealthDto = (data: any): HealthDto => {
    if (!data.status) {
        throw new Error("Status is required");
    }
    return {
        status: data.status,
    };
};
