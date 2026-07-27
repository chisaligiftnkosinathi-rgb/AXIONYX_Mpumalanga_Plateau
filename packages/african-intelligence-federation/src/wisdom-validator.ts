export interface WisdomChecks {
  truth: boolean;
  love: boolean;
  order: boolean;
  mercy: boolean;
}

export class WisdomValidator {
  public validateExchange(checks: WisdomChecks): boolean {
    return checks.truth && checks.love && checks.order && checks.mercy;
  }
}
