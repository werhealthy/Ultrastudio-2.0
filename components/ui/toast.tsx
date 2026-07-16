"use client";export function toast(message:string){window.dispatchEvent(new CustomEvent("ultra-toast",{detail:message}))}
