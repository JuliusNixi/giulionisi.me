/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import { NavigateFunction } from 'astro:transitions/client';

declare global {
  interface Window {
    astroNavigate: NavigateFunction;
  }
}