import ffi from "ffi-napi";

const ntdll = ffi.Library("ntdll", {
  RtlSetProcessIsCritical: ["void", ["int", "int", "int"]],
});

export function enableCriticalProcess() {
  ntdll.RtlSetProcessIsCritical(1, 0, 0);
}

export function disableCriticalProcess() {
  ntdll.RtlSetProcessIsCritical(0, 0, 0);
}
