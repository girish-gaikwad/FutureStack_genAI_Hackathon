import type React from "react"

interface SmartSimpleBrilliantProps {
  width?: number | string
  height?: number | string
  className?: string
  theme?: "light" | "dark"
}

const SmartSimpleBrilliant: React.FC<SmartSimpleBrilliantProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  const themeVars =
    theme === "light"
      ? {
          "--ssb-surface": "#ffffff",
          "--ssb-text": "#1b1919",
          "--ssb-border": "rgba(0,0,0,0.08)",
          "--ssb-inner-border": "rgba(0,0,0,0.12)",
          "--ssb-shadow": "rgba(0,0,0,0.12)",
        }
      : ({
          "--ssb-surface": "#333937",
          "--ssb-text": "#f8f8f8",
          "--ssb-border": "rgba(255,255,255,0.16)",
          "--ssb-inner-border": "rgba(255,255,255,0.12)",
          "--ssb-shadow": "rgba(0,0,0,0.28)",
        } as React.CSSProperties)

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...themeVars,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "295.297px",
          height: "212.272px",
          transform: "scale(1.2)",
        }}
      >
        {/* Left tilted card - Study Planner */}
        <div style={{ position: "absolute", left: "123.248px", top: "0px" }}>
          <div style={{ transform: "rotate(5deg)" }}>
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)",
              }}
            >
              {/* Math Practice */}
              <div style={{ background: "rgba(59,130,246,0.1)", borderRadius: "4px", padding: "6px", marginBottom: "4px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#1E3A8A" }}>10:00 AM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#1E3A8A" }}>Algebra Practice Test</div>
              </div>

              {/* Science Revision */}
              <div style={{ background: "rgba(16,185,129,0.1)", borderRadius: "4px", padding: "6px", marginBottom: "4px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#064E3B" }}>12:30 PM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#064E3B" }}>Physics Revision</div>
              </div>

              {/* English Essay Prep */}
              <div style={{ background: "rgba(245,158,11,0.1)", borderRadius: "4px", padding: "6px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#92400E" }}>5:00 PM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#92400E" }}>Essay Writing Practice</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right tilted card - AI Tutor Help */}
        <div style={{ position: "absolute", left: "0px", top: "6.075px" }}>
          <div style={{ transform: "rotate(-5deg)" }}>
            <div
              style={{
                width: "155.25px",
                background: "#ffffff",
                borderRadius: "9px",
                padding: "6px",
                boxShadow:
                  "-8px 6px 11.3px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Doubt Solving */}
              <div style={{ background: "rgba(139,92,246,0.1)", borderRadius: "4px", padding: "6px", marginBottom: "4px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#581C87" }}>3:00 PM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#581C87" }}>AI Doubt Solver: Chemistry</div>
              </div>

              {/* Quiz */}
              <div style={{ background: "#FFE4E6", borderRadius: "4px", padding: "6px", marginBottom: "4px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#BE123C" }}>6:00 PM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#BE123C" }}>Quick Quiz: World History</div>
              </div>

              {/* Daily Progress */}
              <div style={{ background: "rgba(34,197,94,0.1)", borderRadius: "4px", padding: "6px" }}>
                <div style={{ fontSize: "9px", fontWeight: 600, color: "#166534" }}>8:30 PM</div>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#166534" }}>Daily Progress Recap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartSimpleBrilliant
