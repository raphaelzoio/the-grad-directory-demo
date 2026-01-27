"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// UK cities data with major cities prioritized
const ukCities = [
  // Major cities (tier 1)
  { value: "london", label: "London", priority: 1 },
  { value: "manchester", label: "Manchester", priority: 1 },
  { value: "birmingham", label: "Birmingham", priority: 1 },
  { value: "glasgow", label: "Glasgow", priority: 1 },
  { value: "edinburgh", label: "Edinburgh", priority: 1 },
  { value: "liverpool", label: "Liverpool", priority: 1 },
  { value: "bristol", label: "Bristol", priority: 1 },
  { value: "leeds", label: "Leeds", priority: 1 },
  { value: "cardiff", label: "Cardiff", priority: 1 },
  { value: "belfast", label: "Belfast", priority: 1 },
  
  // Large cities (tier 2)
  { value: "sheffield", label: "Sheffield", priority: 2 },
  { value: "newcastle", label: "Newcastle upon Tyne", priority: 2 },
  { value: "nottingham", label: "Nottingham", priority: 2 },
  { value: "leicester", label: "Leicester", priority: 2 },
  { value: "coventry", label: "Coventry", priority: 2 },
  { value: "southampton", label: "Southampton", priority: 2 },
  { value: "portsmouth", label: "Portsmouth", priority: 2 },
  { value: "brighton", label: "Brighton", priority: 2 },
  { value: "reading", label: "Reading", priority: 2 },
  { value: "cambridge", label: "Cambridge", priority: 2 },
  { value: "oxford", label: "Oxford", priority: 2 },
  { value: "york", label: "York", priority: 2 },
  { value: "bath", label: "Bath", priority: 2 },
  { value: "exeter", label: "Exeter", priority: 2 },
  
  // Other cities (tier 3)
  { value: "aberdeen", label: "Aberdeen", priority: 3 },
  { value: "dundee", label: "Dundee", priority: 3 },
  { value: "inverness", label: "Inverness", priority: 3 },
  { value: "stirling", label: "Stirling", priority: 3 },
  { value: "swansea", label: "Swansea", priority: 3 },
  { value: "newport", label: "Newport", priority: 3 },
  { value: "plymouth", label: "Plymouth", priority: 3 },
  { value: "norwich", label: "Norwich", priority: 3 },
  { value: "ipswich", label: "Ipswich", priority: 3 },
  { value: "peterborough", label: "Peterborough", priority: 3 },
  { value: "derby", label: "Derby", priority: 3 },
  { value: "wolverhampton", label: "Wolverhampton", priority: 3 },
  { value: "sunderland", label: "Sunderland", priority: 3 },
  { value: "middlesbrough", label: "Middlesbrough", priority: 3 },
  { value: "stoke", label: "Stoke-on-Trent", priority: 3 },
  { value: "hull", label: "Kingston upon Hull", priority: 3 },
  { value: "bradford", label: "Bradford", priority: 3 },
  { value: "wakefield", label: "Wakefield", priority: 3 },
  { value: "preston", label: "Preston", priority: 3 },
  { value: "blackpool", label: "Blackpool", priority: 3 },
  { value: "bournemouth", label: "Bournemouth", priority: 3 },
  { value: "luton", label: "Luton", priority: 3 },
  { value: "milton-keynes", label: "Milton Keynes", priority: 3 },
  { value: "northampton", label: "Northampton", priority: 3 },
  { value: "canterbury", label: "Canterbury", priority: 3 },
  { value: "chelmsford", label: "Chelmsford", priority: 3 },
  { value: "colchester", label: "Colchester", priority: 3 },
  { value: "gloucester", label: "Gloucester", priority: 3 },
  { value: "worcester", label: "Worcester", priority: 3 },
  { value: "chester", label: "Chester", priority: 3 },
  { value: "lancaster", label: "Lancaster", priority: 3 },
  { value: "carlisle", label: "Carlisle", priority: 3 },
  { value: "durham", label: "Durham", priority: 3 },
  { value: "salisbury", label: "Salisbury", priority: 3 },
  { value: "winchester", label: "Winchester", priority: 3 },
  { value: "remote", label: "Remote", priority: 1 },
]

// Sort cities by priority and then alphabetically
const sortedCities = [...ukCities].sort((a, b) => {
  if (a.priority !== b.priority) {
    return a.priority - b.priority
  }
  return a.label.localeCompare(b.label)
})

interface UKCityAutocompleteProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  defaultValue?: string
  id?: string
}

export function UKCityAutocomplete({
  value: controlledValue,
  onValueChange,
  placeholder = "Select location...",
  defaultValue,
  id,
}: UKCityAutocompleteProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue
  
  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? "" : currentValue
    
    if (onValueChange) {
      onValueChange(newValue)
    } else {
      setInternalValue(newValue)
    }
    
    setOpen(false)
  }

  const selectedCity = sortedCities.find((city) => city.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {selectedCity ? (
            <span className="text-foreground">{selectedCity.label}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search cities..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup heading="Major Cities">
              {sortedCities
                .filter((city) => city.priority === 1)
                .map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === city.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {city.label}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Other Cities">
              {sortedCities
                .filter((city) => city.priority > 1)
                .map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        value === city.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {city.label}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
