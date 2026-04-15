"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Link } from "@/i18n/navigation";
import { LogIn, LogOut } from "lucide-react";

export function AuthButton() {
  const { user, isAuthenticated, logout, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-20 h-9 bg-gray-100 rounded-lg animate-pulse" />
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline text-sm text-gray-600 max-w-[140px] truncate">
          {user.email}
        </span>
        <button
          onClick={() => logout()}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="로그아웃"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">로그아웃</span>
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <LogIn className="w-4 h-4" />
      <span className="hidden sm:inline">로그인</span>
    </Link>
  );
}
