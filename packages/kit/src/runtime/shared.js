export { set_assets } from '$internal/paths';

export let building = false;
export let version = '';

/** @type {Record<string, string>} */
export let private_env = {};

/** @type {Record<string, string>} */
export let public_env = {};

/** @param {string} stack */
export let fix_stack_trace = (stack) => stack;

/** @param {boolean} value */
export function set_building(value) {
	building = value;
}

/** @type {(environment: Record<string, string>) => void} */
export function set_private_env(environment) {
	private_env = environment;
}

/** @type {(environment: Record<string, string>) => void} */
export function set_public_env(environment) {
	public_env = environment;
}

/** @param {string} value */
export function set_version(value) {
	version = value;
}

/** @param {(stack: string) => string} value */
export function set_fix_stack_trace(value) {
	fix_stack_trace = value;
}
