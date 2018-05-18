extern crate libc;

use std::ffi::CString;
use libc::c_char;

#[no_mangle]
pub extern "C" fn sayhello() -> *const c_char {
    let ret = CString::new(String::from("Hola Mundo").as_bytes()).unwrap();
    ret.into_raw()
}
