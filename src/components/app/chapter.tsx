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
  const [selectedBoard, setSelectedBoard] = useState("")
  const [subjects, setSubjects] = useState<string[]>([])
  const [subjectInput, setSubjectInput] = useState("")
  const sampleSubjects = ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"]
  const [pdfFile, setPdfFile] = useState<File | null>(null)

  const handleAddSubject = () => {
    if (subjectInput.trim() && !subjects.includes(subjectInput.trim())) {
      setSubjects([...subjects, subjectInput.trim()])
      setSubjectInput("")
    }
  }

  const handleRemoveSubject = (subject: string) => {
    setSubjects(subjects.filter(s => s !== subject))
  }

  const handleCreateChapter = () => {
    if (!newChapterName.trim() || !selectedBoard || subjects.length === 0) return
    if (selectedBoard === "Custom" && !pdfFile) return
    onCreateChapter({
      name: newChapterName,
      description: `${newChapterDesc}\nBoard: ${selectedBoard}\nSubjects: ${subjects.join(", ")}${selectedBoard === "Custom" && pdfFile ? "\nPDF: " + pdfFile.name : ""}`
    })
    setSelectedChapter(newChapterName)
    setShowCreateDialog(false)
    setNewChapterName("")
    setNewChapterDesc("")
    setSelectedBoard("")
    setSubjects([])
    setPdfFile(null)
    setIsOpen(false)
  }

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
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Chapter</DialogTitle>
            <DialogDescription>
              Select your board, add subjects, and (for custom) upload your book PDF.
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
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="board">Board</Label>
              <select
                id="board"
                value={selectedBoard}
                onChange={e => setSelectedBoard(e.target.value)}
                className="border rounded-md px-2 py-1"
              >
                <option value="">Select Board</option>
                <option value="CBSE">CBSE</option>
                <option value="TN Matric">TN Matric</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subjects">Subjects</Label>
              <div className="flex gap-2">
                <Input
                  id="subjects"
                  value={subjectInput}
                  onChange={e => setSubjectInput(e.target.value)}
                  placeholder="Add subject"
                  onKeyDown={e => {
                    if (e.key === "Enter") handleAddSubject()
                  }}
                />
                <Button type="button" onClick={handleAddSubject} disabled={!subjectInput.trim()}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {subjects.map(subject => (
                  <span key={subject} className="px-2 py-1 bg-blue-100 rounded text-xs flex items-center gap-1">
                    {subject}
                    <button type="button" className="ml-1 text-red-500" onClick={() => handleRemoveSubject(subject)}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {sampleSubjects.map(suggestion => (
                  <Button
                    key={suggestion}
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-xs px-3"
                    onClick={() => {
                      if (!subjects.includes(suggestion)) setSubjects([...subjects, suggestion])
                    }}
                    disabled={subjects.includes(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
            {selectedBoard === "Custom" && (
              <div className="grid gap-2">
                <Label htmlFor="pdf">Upload Book PDF</Label>
                <Input
                  id="pdf"
                  type="file"
                  accept="application/pdf"
                  onChange={e => setPdfFile(e.target.files?.[0] || null)}
                />
                {pdfFile && (
                  <span className="text-xs text-green-600">Selected: {pdfFile.name}</span>
                )}
              </div>
            )}
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
                setSelectedBoard("")
                setSubjects([])
                setPdfFile(null)
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateChapter}
              disabled={
                !newChapterName.trim() ||
                !selectedBoard ||
                subjects.length === 0 ||
                (selectedBoard === "Custom" && !pdfFile)
              }
            >
              Create Chapter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}