"use client"

import { useContext, useEffect, useState, type Context } from "react"

/**
 * Custom hook to select a specific part of the context state.
 *
 * This hook helps prevent unnecessary re-renders by only consuming
 * the specific state variable you want to use from the context provider.
 * It does not receive updates if any other part of the state object changes.
 *
 * @param context - The React context to consume.
 * @param selectorFn - A function that selects the part of the context state you want.
 * @param equalityFn - A function to determine if the selected state has changed.
 *                     Defaults to strict equality check (a === b).
 * @returns The selected part of the context state.
 * @throws Will throw an error if used outside of a corresponding Provider.
 */
export const useSelector = <T, U>(
  context: Context<T>,
  selectorFn: (state: T) => U,
  equalityFn: (a: U, b: U) => boolean = (a, b) => a === b
): U => {
  const contextValue = useContext(context)
  if (contextValue === undefined) {
    throw new Error("useSelector must be used within a corresponding Provider")
  }

  const [selectedState, setSelectedState] = useState(() =>
    selectorFn(contextValue)
  )

  useEffect(() => {
    const newSelectedState = selectorFn(contextValue)
    if (!equalityFn(selectedState, newSelectedState)) {
      setSelectedState(newSelectedState)
    }
  }, [contextValue, selectedState])

  return selectedState
}
