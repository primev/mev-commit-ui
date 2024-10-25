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

function scaleFactor(width: number) {
  return 1.1875 - 0.00307 * width + 3.7e-6 * width ** 2 - 1.62e-9 * width ** 3
}

export const DynamicInput: React.FC<DynamicInputProps> = ({
  value,
  onChange,
  placeholder = "0",
  className = "",
  label = "",
  ...props
}) => {
  const [inputWidth, setInputWidth] = useState(20)
  const [fontSize, setFontSize] = useState(1)
  const spanRef = useRef<HTMLSpanElement>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const newValue = e.target.value.replace(/[^0-9.]/g, "")

    // Allow '0' after the first character
    let finalValue = newValue
    if (newValue.length > 1 && newValue[0] === "0" && newValue[1] !== ".") {
      finalValue = newValue.slice(1)
    }

    onChange?.(e)
  }

  useEffect(() => {
    if (spanRef.current) {
      const newWidth = Math.max(spanRef.current.offsetWidth + 4, 20) // 4px buffer, minimum 20px

      setInputWidth(newWidth)
      const scale = scaleFactor(newWidth)
      setFontSize(scale)
    }
  }, [value])

  return (
    <div
      className={cn(
        className,
        `relative inline-flex max-w-64 origin-left items-center`
      )}
      style={{ transform: `scale(${fontSize})` }} // Apply scale to the container div
    >
      <input
        autoFocus
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-transparent font-semibold placeholder-muted focus:outline-none"
        style={{ width: `${inputWidth}px` }}
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
