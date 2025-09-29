"use client"

import React, { useState } from "react"
import { ChevronsUpDown, GalleryVerticalEnd, Check, Plus } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"

interface Chapter {
  name: string
  description: string
}

export function ChapterSwitcher({
  chapters,
  defaultChapter,
  onCreateChapter,
}: {
  chapters: Chapter[]
  defaultChapter: string
  onCreateChapter: (chapter: Chapter) => void
}) {
  const [selectedChapter, setSelectedChapter] = useState(defaultChapter)
  const [isOpen, setIsOpen] = useState(false)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newChapterName, setNewChapterName] = useState("")
  const [newChapterDesc, setNewChapterDesc] = useState("")

  const handleCreateChapter = () => {
    if (newChapterName.trim()) {
      onCreateChapter({ name: newChapterName, description: newChapterDesc })
      setSelectedChapter(newChapterName)
      setShowCreateDialog(false)
      setNewChapterName("")
      setNewChapterDesc("")
      setIsOpen(false)
    }
  }

  const selectedChapterObj = chapters.find(ch => ch.name === selectedChapter)

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className="w-full justify-between h-auto py-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-md bg-primary/10 p-1.5">
                <GalleryVerticalEnd className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-medium text-muted-foreground">
                  Chapter
                </span>
                <span className="text-sm font-semibold">
                  {selectedChapter}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandList>
              <CommandEmpty>No chapters found.</CommandEmpty>
              <CommandGroup heading="Chapters">
                {chapters.map((chapter) => (
                  <CommandItem
                    key={chapter.name}
                    onSelect={() => {
                      setSelectedChapter(chapter.name)
                      setIsOpen(false)
                    }}
                    className="flex items-start gap-2 py-2 cursor-pointer"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 ${
                        chapter.name === selectedChapter
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{chapter.name}</span>
                      {chapter.description && (
                        <span className="text-xs text-muted-foreground line-clamp-1">
                          {chapter.description}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    setShowCreateDialog(true)
                    setIsOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Create New Chapter</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Chapter</DialogTitle>
            <DialogDescription>
              Add a new chapter to organize your content. Give it a name and optional description.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Chapter Name</Label>
              <Input
                id="name"
                value={newChapterName}
                onChange={(e) => setNewChapterName(e.target.value)}
                placeholder="e.g., Chapter 1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newChapterName.trim()) {
                    handleCreateChapter()
                  }
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={newChapterDesc}
                onChange={(e) => setNewChapterDesc(e.target.value)}
                placeholder="Brief description of this chapter"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowCreateDialog(false)
                setNewChapterName("")
                setNewChapterDesc("")
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateChapter}
              disabled={!newChapterName.trim()}
            >
              Create Chapter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}