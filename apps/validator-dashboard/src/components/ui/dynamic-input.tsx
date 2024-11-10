"use client"

import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

interface DynamicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  className?: string
  label?: string
}

// Constants for magic numbers
const MIN_INPUT_WIDTH = 36 // Minimum width for the input
const INITIAL_FONT_SIZE = 1 // Initial font size scale
const WIDTH_BUFFER = 4 // Buffer added to the calculated width

function scaleFactor(width: number) {
  return 1.1875 - 0.00307 * width + 3.7e-6 * width ** 2 - 1.62e-9 * width ** 3
}

export const DynamicInput = React.forwardRef<
  HTMLInputElement,
  DynamicInputProps
>(
  (
    {
      value = "",
      onChange,
      placeholder = "0",
      className = "",
      label = "ETH",
      ...props
    },
    ref
  ) => {
    const [inputWidth, setInputWidth] = useState(MIN_INPUT_WIDTH)
    const [fontSize, setFontSize] = useState(INITIAL_FONT_SIZE)
    const spanRef = useRef<HTMLSpanElement>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      e.stopPropagation()
      let newValue = e.target.value.replace(/[^0-9.]/g, "")

      // Allow '0' after the first character
      if (newValue.length > 1 && newValue[0] === "0" && newValue[1] !== ".") {
        newValue = newValue.slice(1)
      }

      // Update the input's value with the sanitized newValue
      onChange?.({
        ...e,
        target: { ...e.target, value: newValue },
      })
    }

    useEffect(() => {
      if (spanRef.current) {
        const newWidth = Math.max(
          spanRef.current.offsetWidth + WIDTH_BUFFER,
          MIN_INPUT_WIDTH
        ) // 4px buffer, minimum 20px

        setInputWidth(newWidth)
        const scale = scaleFactor(newWidth)
        setFontSize(scale)
      }
    }, [value])

    return (
      <div
        className={cn(
          className,
          `relative inline-flex max-w-64 origin-center items-center text-6xl`
        )}
        style={{ transform: `scale(${fontSize})` }} // Apply scale to the container div
      >
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="bg-transparent font-semibold placeholder-muted-foreground focus:outline-none"
          style={{ width: `${inputWidth}px` }}
          {...props}
        />
        <span className="ml-1 text-gray-400">{label}</span>
        <span
          ref={spanRef}
          className="invisible absolute left-0 whitespace-pre font-semibold"
          aria-hidden="true"
        >
          {value || placeholder}
        </span>
      </div>
    )
  }
)
