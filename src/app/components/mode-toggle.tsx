"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<>
			<Button variant="outline" size="icon" className="flex dark:hidden" onClick={() => setTheme("dark")}>
				<Sun className="h-4 w-4" />
			</Button>
			<Button variant="outline" size="icon" className="hidden dark:flex" onClick={() => setTheme("light")}>
				<Moon className="h-4 w-4" />
			</Button>
		</>

	)
}
