import { Injectable } from '@angular/core';
import { MetaService } from './meta.service';
import * as i0 from "@angular/core";
import * as i1 from "./meta.service";
export class MetaGuard {
    constructor(meta) {
        this.meta = meta;
    }
    canActivate(route, state) {
        const url = state.url;
        const metaSettings = route.hasOwnProperty('data') ? route.data.meta : undefined;
        this.meta.update(url, metaSettings);
        return true;
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
MetaGuard.ɵfac = function MetaGuard_Factory(t) { return new (t || MetaGuard)(i0.ɵɵinject(i1.MetaService)); };
MetaGuard.ɵprov = i0.ɵɵdefineInjectable({ token: MetaGuard, factory: MetaGuard.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetaGuard, [{
        type: Injectable
    }], function () { return [{ type: i1.MetaService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL0BuZ3gtbWV0YS9jb3JlL3NyYy9tZXRhLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHN0MsTUFBTSxPQUFPLFNBQVM7SUFDcEIsWUFBNkIsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7SUFFbEQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUV0QixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWhGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7a0VBZlUsU0FBUztpREFBVCxTQUFTLFdBQVQsU0FBUzt1RkFBVCxTQUFTO2NBRHJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1ldGFTZXJ2aWNlIH0gZnJvbSAnLi9tZXRhLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWV0YUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1ldGE6IE1ldGFTZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVybCA9IHN0YXRlLnVybDtcblxuICAgIGNvbnN0IG1ldGFTZXR0aW5ncyA9IHJvdXRlLmhhc093blByb3BlcnR5KCdkYXRhJykgPyByb3V0ZS5kYXRhLm1ldGEgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLm1ldGEudXBkYXRlKHVybCwgbWV0YVNldHRpbmdzKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2FuQWN0aXZhdGVDaGlsZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShyb3V0ZSwgc3RhdGUpO1xuICB9XG59XG4iXX0=