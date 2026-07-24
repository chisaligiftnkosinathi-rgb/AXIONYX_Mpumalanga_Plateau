export class ChaosMonkey {
  private isRunning: boolean = false;
  private intervalId: any = null;

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    console.log(`[ChaosMonkey] 🐒 Unleashed in Exploratory Resilience Mode.`);

    this.intervalId = setInterval(() => {
      this.injectRandomFailure();
    }, 5000); // Inject a failure every 5 seconds
  }

  stop() {
    this.isRunning = false;
    if (this.intervalId) clearInterval(this.intervalId);
    console.log(`[ChaosMonkey] 🐒 Contained.`);
  }

  private injectRandomFailure() {
    const roll = Math.random();

    if (roll < 0.25) {
      console.warn(`[ChaosMonkey] 💥 Dropping PostgreSQL Connection!`);
      // Simulate PG drop
    } else if (roll < 0.50) {
      console.warn(`[ChaosMonkey] 💥 Dropping MQTT Packets!`);
      // Simulate MQTT loss
    } else if (roll < 0.75) {
      console.warn(`[ChaosMonkey] 💥 Simulating Pod Restart!`);
      // Simulate Kubernetes Pod crash
    } else {
      console.warn(`[ChaosMonkey] 💥 Introducing 2000ms EventBus Latency!`);
      // Simulate degraded network
    }
  }
}
