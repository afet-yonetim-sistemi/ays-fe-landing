import React, { useState, useEffect, useCallback } from 'react'
import { IoCaretDown } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from 'cmdk'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import CityAndDistrict from '@/data/cities_districts.json'
import { cn } from '@/lib/utils'

interface SelectLocationProps {
  type: 'city' | 'district'
  value: string
  onChange: (value: string) => void
  cityValue?: string // Only needed for district selection
  disabledOptions?: string[]
}

const SelectLocation: React.FC<SelectLocationProps> = ({
  type,
  value,
  onChange,
  cityValue,
  disabledOptions = [],
}) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<{ name: string }[]>([])

  useEffect(() => {
    if (type === 'city') {
      setItems(CityAndDistrict)
    } else if (type === 'district' && cityValue) {
      onChange('')
      const selectedCity = CityAndDistrict.find(
        (city) => city.name === cityValue
      )
      setItems(selectedCity?.districts || [])
    }
  }, [type, cityValue, onChange])

  const handleSelect = useCallback(
    (selectedValue: string) => {
      if (!disabledOptions.includes(selectedValue)) {
        onChange(selectedValue)
        setOpen(false)
      }
    },
    [onChange, disabledOptions]
  )

  const disabledDistrict: boolean = type === 'district' && !cityValue
  const placeholder =
    type === 'city'
      ? 'Bir Şehir Seçin'
      : disabledDistrict
        ? 'Bir Şehir Seçmelisin'
        : 'Bir İlçe Seçin'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabledDistrict}
          className="flex items-center justify-between gap-5 w-full"
        >
          <span>{value || placeholder}</span>
          <IoCaretDown className="text-4xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="shadow-md w-80">
        <Command>
          <CommandInput
            placeholder={`${type === 'city' ? 'Şehir' : 'İlçe'}...`}
            className="p-1 px-2 w-full bg-transparent border-b-2 border-black shadow-lg outline-none"
          />
          <ScrollArea className="space-y-2 pr-3">
            <CommandList className="h-72 w-full">
              <CommandEmpty>Bulunamadı...</CommandEmpty>
              {items.map((item, i) => (
                <CommandItem
                  key={i}
                  onSelect={() => handleSelect(item.name)}
                  className={cn(
                    'w-full text-lg font-semibold p-1 px-2 cursor-pointer rounded-sm flex items-center justify-between',
                    {
                      'text-gray-400 cursor-not-allowed':
                        disabledOptions.includes(item.name),
                      'hover:bg-gray-500/20': !disabledOptions.includes(
                        item.name
                      ),
                    }
                  )}
                >
                  <span>{item.name}</span>
                  {!disabledOptions.includes(item.name) && (
                    <FaCheck
                      className={cn('opacity-0', {
                        'opacity-100': item.name === value,
                      })}
                    />
                  )}
                </CommandItem>
              ))}
            </CommandList>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default SelectLocation
