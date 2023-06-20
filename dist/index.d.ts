declare module "enums/available-filter.enum" {
    export enum AvailableFilter {
        None = "none",
        Url = "url",
        Blur = "blur",
        Brightness = "brightness",
        Contrast = "contrast",
        DropShadow = "drop-shadow",
        Grayscale = "grayscale",
        HueRotate = "hue-rotate",
        Invert = "invert",
        Opacity = "opacity",
        Saturate = "saturate",
        Sepia = "sepia"
    }
}
declare module "types/filter.type" {
    export type Filter = (context: CanvasRenderingContext2D, ...options: any[]) => CanvasRenderingContext2D;
}
declare module "globals/supported-filters.global" {
    import type { Filter } from "types/filter.type";
    export const SUPPORTED_FILTERS: Map<string, Filter>;
}
declare module "utils/context.utils" {
    export const supportsContextFilters: () => boolean;
    export const createOffscreenContext: (original: CanvasRenderingContext2D) => CanvasRenderingContext2D;
}
declare module "patches/property.patches" {
    export function applyPropertyPatches(canvas: any, context: any): void;
}
declare module "globals/protected-keys.global" {
    export const PROTECTED_KEYS: string[];
}
declare module "patches/setter.patches" {
    export function applySetterPatches(context: any): void;
}
declare module "globals/drawing-functions.global" {
    export const DRAWING_FUNCTIONS: string[];
}
declare module "utils/filter.utils" {
    export const applyFilter: (context: CanvasRenderingContext2D, canvasFilters: CanvasFilters['filter']) => void;
    export const normalizeNumberPercentage: (percentage: string) => number;
    export const normalizeAngle: (angle: string) => number;
    export const normalizeLength: (length: string) => number;
}
declare module "patches/method.patches" {
    export function applyMethodPatches(context: any): void;
}
declare module "filters/none.filter" {
    import type { Filter } from "types/filter.type";
    export const none: Filter;
}
declare module "filters/blur.filter" {
    import type { Filter } from "types/filter.type";
    export const blur: Filter;
}
declare module "filters/brightness.filter" {
    import type { Filter } from "types/filter.type";
    export const brightness: Filter;
}
declare module "filters/contrast.filter" {
    import type { Filter } from "types/filter.type";
    export const contrast: Filter;
}
declare module "filters/drop-shadow.filter" {
    import type { Filter } from "types/filter.type";
    export const dropShadow: Filter;
}
declare module "filters/grayscale.filter" {
    import type { Filter } from "types/filter.type";
    export const grayscale: Filter;
}
declare module "filters/hue-rotate.filter" {
    import type { Filter } from "types/filter.type";
    export const hueRotate: Filter;
}
declare module "filters/invert.filter" {
    import type { Filter } from "types/filter.type";
    export const invert: Filter;
}
declare module "filters/opacity.filter" {
    import type { Filter } from "types/filter.type";
    export const opacity: Filter;
}
declare module "filters/saturate.filter" {
    import type { Filter } from "types/filter.type";
    export const saturate: Filter;
}
declare module "filters/sepia.filter" {
    import type { Filter } from "types/filter.type";
    export const sepia: Filter;
}
declare module "index" { }
