import { writable } from "svelte/store";

export const absoluteRef = writable<HTMLDivElement | undefined>()