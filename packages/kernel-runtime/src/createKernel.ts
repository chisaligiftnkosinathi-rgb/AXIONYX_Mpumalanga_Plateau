import { KernelConfig } from './config';
import { KernelRuntime } from './KernelRuntime';

export function createKernel(config: KernelConfig): KernelRuntime {
  return new KernelRuntime(config);
}
