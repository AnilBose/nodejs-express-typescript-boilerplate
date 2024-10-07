import { HealthModel } from "../models/healthModel";

export class HealthService {
    async checkHealth() {
        return "Server is running";
    }

    async saveHealthData(status: string) {
        const healthData = new HealthModel({ status });
        await healthData.save();
        return healthData;
    }
}
