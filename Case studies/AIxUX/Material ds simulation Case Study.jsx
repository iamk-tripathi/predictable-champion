import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Check,
  PenTool,
  Code as CodeIcon,
  BarChart3,
  Network,
} from 'lucide-react';

const ACCENT_COLOR = '#6750A4';
const DARK_BG = '#1E1E1E';
const OFF_WHITE = '#FAFAFA';

// Reusable Components
const Label = ({ children, centered = false, color = ACCENT_COLOR, light = false }) => (
  <div
    className={`text-[10px] tracking-[0.2em] font-bold uppercase mb-4 ${
      centered ? 'text-center' : ''
    }`}
    style={{ color: light ? '#FFF' : color }}
  >
    {children}
  </div>
);

const Placeholder = ({ label, className = '', height = 'h-64', dark = false }) => (
  <div
    className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center ${className} ${height} ${
      dark ? 'border-gray-600 bg-neutral-800' : 'border-gray-200 bg-gray-50'
    }`}
  >
    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
      [ {label} ]
    </span>
  </div>
);

const CodeBlock = ({ code, annotations = [], isPositive = false }) => (
  <div className="flex flex-col h-full">
    <div className="bg-[#1E1E1E] p-6 rounded-xl font-mono text-sm text-gray-300 overflow-hidden mb-4">
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
    <div className="space-y-2">
      {annotations.map((note, i) => (
        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
          {isPositive ? (
            <Check size={14} className="text-green-600 mt-1 flex-shrink-0" />
          ) : (
            <X size={14} className="text-red-600 mt-1 flex-shrink-0" />
          )}
          <span>{note}</span>
        </div>
      ))}
    </div>
  </div>
);

const Slide = ({ slideNumber, totalSlides, children, dark = false, layout = 'default' }) => {
  const bgColor = dark ? DARK_BG : slideNumber === 16 ? DARK_BG : OFF_WHITE;

  return (
    <div
      className="relative w-full aspect-video p-16 flex flex-col transition-opacity duration-500 overflow-hidden shadow-2xl rounded-lg"
      style={{ backgroundColor: bgColor, color: dark || slideNumber === 16 ? '#FFF' : '#1A1A1A' }}
    >
      <div className={`flex-1 ${layout === 'centered' ? 'flex flex-col items-center justify-center' : ''}`}>
        {children}
      </div>

      <div className="mt-auto flex justify-between items-end text-[10px] text-gray-400 font-medium">
        <div>
          {(slideNumber === 1 || slideNumber === totalSlides) && (
            <div className="text-left">
              <div className="font-bold uppercase tracking-wider text-gray-500 mb-1">
                Kushagra [Last Name]
              </div>
              <div className="uppercase">Interaction Designer | Western Union</div>
            </div>
          )}
        </div>
        <div className="opacity-60">
          {slideNumber} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide slideNumber={1} totalSlides={18} layout="centered">
      <Label centered>Portfolio Case Study</Label>
      <h1 className="text-6xl font-extrabold mb-6 text-center leading-tight tracking-tight">
        Teaching AI to Speak <br />
        Design System
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl text-center mb-10 leading-relaxed">
        How I built a context pipeline that makes AI generate DS-compliant UI — and what it means
        for how product teams work
      </p>
      <div className="w-48 h-[1px] mb-12" style={{ backgroundColor: ACCENT_COLOR }}></div>
      <div className="grid grid-cols-2 gap-24 w-full max-w-2xl text-sm">
        <div>
          <span className="text-gray-400 uppercase font-bold text-[10px] block mb-1">Role</span>
          Interaction Designer | Western Union
        </div>
        <div>
          <span className="text-gray-400 uppercase font-bold text-[10px] block mb-1">Tools</span>
          Figma • Claude • VS Code • Storybook
        </div>
      </div>
      <div className="absolute bottom-16 right-16">
        <Placeholder
          label="ABSTRACT VISUAL - CIRCUIT/NODE PATTERN"
          className="w-48 h-48 opacity-20"
        />
      </div>
    </Slide>,

    <Slide slideNumber={2} totalSlides={18}>
      <Label>The Problem</Label>
      <div className="grid grid-cols-2 gap-16 h-full items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Every team has a design system. Almost no AI tool uses it.
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Engineers use AI to scaffold screens. The output ignores every design decision the team
            spent months making. Wrong tokens. Wrong components. Wrong spacing. Generic output that
            looks nothing like your product.
          </p>
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: ACCENT_COLOR }}>
            <p className="text-2xl italic font-serif text-gray-800">
              &quot;The problem wasn&apos;t AI capability. The problem was missing context.&quot;
            </p>
          </div>
        </div>
        <Placeholder
          label="SIDE-BY-SIDE COMPARISON IMAGE - AL OUTPUT VS DS SPEC"
          height="h-full"
        />
      </div>
    </Slide>,

    <Slide slideNumber={3} totalSlides={18} layout="centered">
      <Label centered>The Reframe</Label>
      <h2 className="text-5xl font-bold text-center mb-10 max-w-4xl leading-tight">
        AI doesn&apos;t generate generic output because it&apos;s bad at design. It generates
        generic output because nobody told it what your design looks like.
      </h2>
      <p className="text-xl text-gray-500">
        The question isn&apos;t &quot;what can AI do?&quot; It&apos;s &quot;what does AI need
        from design to be useful?&quot;
      </p>
    </Slide>,

    <Slide slideNumber={4} totalSlides={18}>
      <Label>The Root Cause</Label>
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            AI was generating for the world. We needed it to generate for us.
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Without context, every AI prompt starts from zero. It doesn&apos;t know our spacing
            scale. It doesn&apos;t know that filled buttons are reserved for primary CTAs. It
            doesn&apos;t know that mobile navigation means a bottom bar not a hamburger menu.
          </p>
          <ul className="space-y-4">
            {[
              'No access to token semantic roles',
              'No access to component selection rules',
              'No access to screen layout patterns',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-red-600 font-medium">
                <X size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Placeholder label="SCREENSHOT - HARDCODED AI OUTPUT ANNOTATED" height="h-96" />
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={5} totalSlides={18}>
      <Label>The Solution</Label>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">A context pipeline. Not a tool. A system.</h2>
        <p className="text-gray-500">
          Every layer feeds the next. Design decisions flow from Figma all the way into generated
          code.
        </p>
      </div>

      <div className="flex items-center justify-between w-full max-w-5xl mx-auto my-12">
        {[
          { label: 'FIGMA DS', sub: 'Tokens + Components' },
          { label: 'MCP', sub: 'Reads Metadata' },
          { label: 'CONTEXT FILES', sub: 'design-system.md' },
          { label: 'CODE LAYER', sub: 'TS Wrappers' },
          { label: 'STORYBOOK', sub: 'Living Docs' },
        ].map((node, i, arr) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center group">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">{node.label}</div>
                <div className="text-[10px] text-gray-400">{node.sub}</div>
              </div>
            </div>
            {i < arr.length - 1 && (
              <div className="flex-1 flex flex-col items-center px-4">
                <ArrowRight size={20} className="text-gray-300 mb-1" />
                <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold">
                  {['reads', 'informs', 'constrains', 'documents'][i]}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto mt-12 italic">
        Remove any one node and quality degrades. All five together produce output no single tool
        could generate alone.
      </p>
    </Slide>,

    <Slide slideNumber={6} totalSlides={18}>
      <Label>Layer 1: Figma</Label>
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            The design system as machine-readable inventory.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Using Figma MCP, I systematically read every page of the M3 Design Kit — 23 component
            families, all variant axes, all token collections — and produced two structured outputs
            that became the source of truth for everything else.
          </p>
          <div className="flex gap-12 mb-8">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: ACCENT_COLOR }}>
                2,129
              </div>
              <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">
                lines of JSON
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: ACCENT_COLOR }}>
                29/29
              </div>
              <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">
                pages validated
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 italic">
            Not a spec written from memory. A direct, verified extraction from the design system
            itself.
          </p>
        </div>
        <Placeholder
          label="SCREENSHOT - VS CODE MD FILE + FIGMA VARIABLES PANEL"
          height="h-full"
        />
      </div>
    </Slide>,

    <Slide slideNumber={7} totalSlides={18}>
      <Label>Layer 2: Context Files</Label>
      <div className="grid grid-cols-2 gap-16 items-center h-full">
        <Placeholder label="SCREENSHOT - design-system.md VS CODE PREVIEW" height="h-full" />
        <div>
          <h2 className="text-4xl font-bold mb-8">Design rules structured for AI to read.</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            design-system.md contains every design decision the DS encodes — token semantic roles,
            component selection logic, layout patterns, hard rules. It&apos;s the source of truth
            that AI reads before generating anything.
          </p>
          <div className="space-y-4">
            {[
              'Max one filled button per screen',
              'Spacing must be multiples of 4pt',
              'Mobile nav = BottomNavigation, never hamburger',
            ].map((rule, i) => (
              <div
                key={i}
                className="inline-block bg-neutral-900 text-white px-4 py-3 rounded font-mono text-sm mr-4 mb-2"
              >
                &quot;{rule}&quot;
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={8} totalSlides={18}>
      <Label>Layer 3: Code Layer</Label>
      <div className="grid grid-cols-2 gap-16 items-center">
        <Placeholder label="CODE SCREENSHOT - DSButton.tsx WITH TS INTERFACE" height="h-full" />
        <div>
          <h2 className="text-4xl font-bold mb-8">
            Wrong usage fails at compile time, not code review.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            25 TypeScript wrapper components. Each one exposes only the variants that exist in
            Figma. Pass an invalid variant and the code won&apos;t compile. Design rules enforced
            by the type system — not by convention, not by hope.
          </p>
          <div className="mb-6">
            <div className="text-6xl font-bold mb-2" style={{ color: ACCENT_COLOR }}>
              25
            </div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              DS wrapper components
            </div>
          </div>
          <p className="text-gray-400 text-sm italic">
            Named identically to Figma components. One-to-one mapping. No translation required.
          </p>
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={9} totalSlides={18}>
      <div className="absolute inset-0 z-0">
        <Placeholder label="FULL SLIDE BG - STORYBOOK BUTTON DOCS PAGE" height="h-full" />
      </div>
      <div className="relative z-10 p-8 bg-neutral-900/90 inline-block rounded-br-2xl text-white max-w-xl">
        <Label light>Layer 4: Storybook</Label>
        <h2 className="text-4xl font-bold mb-4">Living documentation. Not a static spec.</h2>
      </div>
      <div className="mt-auto relative z-10 grid grid-cols-3 bg-neutral-900 p-8 rounded-t-2xl text-white">
        <div className="text-center border-r border-neutral-700">
          <div className="text-3xl font-bold mb-1">25</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">component pages</div>
        </div>
        <div className="text-center border-r border-neutral-700">
          <div className="text-3xl font-bold mb-1">3</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">token pages</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">100%</div>
          <div className="text-[10px] uppercase tracking-widest opacity-60">props coverage</div>
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={10} totalSlides={18}>
      <h2 className="text-4xl font-bold mb-12 text-center">
        Same prompt. Two completely different outputs.
      </h2>
      <div className="grid grid-cols-2 gap-8 h-full">
        <div className="flex flex-col">
          <div className="bg-red-600 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block self-start">
            Without Context Pipeline
          </div>
          <CodeBlock
            code={`<div style={{ color: '#6750A4', padding: '10px' }}>\n  <h2>Dashboard</h2>\n  <div className="card">...</div>\n</div>`}
            annotations={[
              'Hardcoded hex color',
              'Non-DS spacing value (10px)',
              'Raw HTML, no DS components',
            ]}
          />
        </div>
        <div className="flex flex-col">
          <div className="bg-green-600 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block self-start">
            With Context Pipeline
          </div>
          <CodeBlock
            isPositive
            code={`<DSAppBar size="small" title="Dashboard" />\n<DSCard variant="elevated">\n  <CardContent sx={(t) => ({\n    padding: t.spacing(4)\n  })}>`}
            annotations={[
              'Token reference, not hardcoded',
              '4pt spacing scale enforced',
              'DS component, correct variant',
            ]}
          />
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={11} totalSlides={18} layout="centered">
      <div className="absolute top-16 left-16">
        <Label>Live Demo - Part 1</Label>
      </div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">One prompt. DS-compliant UI. First try.</h2>
        <p className="text-gray-500">Prompt typed → live code generated → rendered in browser</p>
      </div>
      <Placeholder label="SCREEN RECORDING - FINTECH GENERATION" className="w-full max-w-4xl" height="h-96" />
      <p className="mt-6 text-gray-400 text-sm">
        The pipeline handles DS compliance. Human judgment handles product decisions.
      </p>
    </Slide>,

    <Slide slideNumber={12} totalSlides={18} layout="centered">
      <div className="absolute top-16 left-16">
        <Label>Live Demo - Part 2</Label>
      </div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Paste a Figma link. Get working DS code.</h2>
        <p className="text-gray-500">Figma MCP reads design → Codex generates React → Browser renders</p>
      </div>
      <Placeholder label="SCREEN RECORDING - FIGMA LINK TO CODE" className="w-full max-w-4xl" height="h-96" />
      <p className="mt-6 text-gray-400 text-sm">
        Developers stop interpreting designs. They start from DS-compliant code.
      </p>
    </Slide>,

    <Slide slideNumber={13} totalSlides={18}>
      <Label>Live Demo - Part 3</Label>
      <h2 className="text-4xl font-bold mb-4">
        Maintaining a DS used to take a team. Now it takes one prompt.
      </h2>
      <p className="text-gray-500 mb-8">
        90 accessibility gaps across 25 components. Fixed in real time.
      </p>
      <div className="grid grid-rows-[1fr_auto_1fr] gap-4 h-full">
        <div className="relative border-2 border-red-100 rounded-xl overflow-hidden">
          <div className="absolute top-4 left-4 bg-red-600 text-white text-[8px] px-2 py-1 font-bold">
            BEFORE
          </div>
          <Placeholder label="SCREENSHOT - ACCESSIBILITY PLACEHOLDERS" height="h-full" />
        </div>
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gray-200"></div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: ACCENT_COLOR }}>
            One Prompt →
          </div>
          <div className="h-[1px] flex-1 bg-gray-200"></div>
        </div>
        <div className="relative border-2 border-green-100 rounded-xl overflow-hidden">
          <div className="absolute top-4 left-4 bg-green-600 text-white text-[8px] px-2 py-1 font-bold">
            AFTER
          </div>
          <Placeholder label="SCREENSHOT - POPULATED ACCESSIBILITY CONTENT" height="h-full" />
        </div>
      </div>
    </Slide>,

    <Slide slideNumber={14} totalSlides={18}>
      <Label>Impact</Label>
      <h2 className="text-4xl font-bold mb-12">One pipeline. Four different teams benefit.</h2>
      <div className="grid grid-cols-2 gap-8 h-full">
        {[
          {
            icon: <PenTool />,
            title: 'For Designers',
            body: 'Design decisions stop dying in handoff. The reasoning behind every token and rule flows into every AI generation.',
          },
          {
            icon: <CodeIcon />,
            title: 'For Developers',
            body: 'Reduced interpretation overhead. Paste a Figma link, get a DS-compliant starting point. Human judgment handles what matters.',
          },
          {
            icon: <BarChart3 />,
            title: 'For Product & Business',
            body: 'Non-designers can generate DS-compliant prototype screens for brainstorming and stakeholder reviews — without learning Figma.',
          },
          {
            icon: <Network />,
            title: 'For the Design System',
            body: 'The DS becomes more valuable the more AI is used. It stops being a doc people consult and becomes an input tools consume.',
          },
        ].map((q, i) => (
          <div
            key={i}
            className="p-8 border rounded-2xl border-purple-100 bg-white shadow-sm flex flex-col items-start"
          >
            <div className="mb-4" style={{ color: ACCENT_COLOR }}>
              {q.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{q.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{q.body}</p>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide slideNumber={15} totalSlides={18}>
      <Label>What&apos;s Next</Label>
      <h2 className="text-4xl font-bold mb-16">
        The simulation is done. The migration path is ready.
      </h2>
      <div className="relative flex justify-between items-center w-full max-w-5xl mx-auto mb-24">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-dashed border-t border-dashed border-gray-300 -z-10"></div>
        {[
          { step: 'DONE', desc: 'M3 Simulation complete. Pipeline proven.', active: true },
          { step: 'Code Connect', desc: 'Figma shows DS code in Dev Mode', active: false },
          { step: 'Variant Testing', desc: '140+ stories for visual regression', active: false },
          { step: 'Port to real DS', desc: 'Our tokens, our components', active: false },
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center w-48 text-center">
            <div
              className={`w-4 h-4 rounded-full mb-4 border-2 ${
                s.active ? 'bg-[#6750A4] border-[#6750A4]' : 'bg-white border-gray-300'
              }`}
            ></div>
            <div
              className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                s.active ? 'text-[#6750A4]' : 'text-gray-400'
              }`}
            >
              {s.step}
            </div>
            <p className="text-[10px] text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto italic">
        The structural decisions are made. The documentation exists. Applying this to our design
        system is an execution question, not a design question.
      </p>
    </Slide>,

    <Slide slideNumber={16} totalSlides={18} layout="centered" dark>
      <h2 className="text-6xl font-extrabold text-center mb-8 max-w-5xl leading-tight">
        The most important design work of the next decade won&apos;t be designing for users.
      </h2>
      <div className="text-3xl font-medium mb-12" style={{ color: ACCENT_COLOR }}>
        It will be designing the systems that make AI useful to teams.
      </div>
      <p className="text-xl text-neutral-400 mb-12 font-light">
        Structured documentation. Machine-readable rules. Token-level precision. Information
        architecture for AI workflows.
      </p>
      <div className="w-32 h-[1px] mb-8" style={{ backgroundColor: ACCENT_COLOR }}></div>
      <Label light centered>
        That&apos;s interaction design. Applied to a new kind of interface.
      </Label>
    </Slide>,

    <Slide slideNumber={17} totalSlides={18}>
      <Label>Appendix</Label>
      <h2 className="text-4xl font-bold mb-4">The full deliverable set.</h2>
      <p className="text-gray-500 mb-8">
        Everything was built and validated without engineering support. No production codebase was
        modified.
      </p>

      <div className="flex-1 overflow-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm text-left">
          <thead
            className="text-[10px] uppercase tracking-widest text-white sticky top-0"
            style={{ backgroundColor: ACCENT_COLOR }}
          >
            <tr>
              <th className="px-6 py-4">Deliverable</th>
              <th className="px-6 py-4">Detail</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              ['DS context file', 'design-system.md — token rules, component rules, layout patterns', '✓'],
              ['AI instructions', '.github/copilot-instructions.md — codebase-specific rules', '✓'],
              ['Figma inventory', 'material-3-design-kit-inventory.md — all 23 components', '✓'],
              ['Variant map', 'material-3-design-kit-variants.json — 2,129 lines, machine-readable', '✓'],
              ['DS wrapper components', '25 TypeScript components, all variants enforced by types', '✓'],
              ['Storybook stories', '25 story files, args-based, autodocs enabled', '✓'],
              ['MDX documentation', '25 component doc pages + 3 token pages', '✓'],
              ['Token documentation', 'color.md, typography.md, shape.md with usage rules', '✓'],
              ['Demo screens', 'Dashboard.tsx, Settings.tsx — AI-generated, DS-compliant', '✓'],
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 font-bold text-gray-800">{row[0]}</td>
                <td className="px-6 py-4 text-gray-500">{row[1]}</td>
                <td className="px-6 py-4 text-center font-bold" style={{ color: ACCENT_COLOR }}>
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Slide>,

    <Slide slideNumber={18} totalSlides={18} layout="centered">
      <div className="mb-12">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-gray-100 mb-6 bg-gray-100">
          <div className="flex items-center justify-center h-full text-gray-300 text-[10px] font-bold">
            [ PHOTO ]
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-center">
          Let&apos;s talk about what this looks like for your team.
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-xl mx-auto leading-relaxed">
          Available for senior interaction design roles. Bringing strategic design thinking, AI
          tooling fluency, and systems-level perspective.
        </p>
      </div>

      <div className="text-center">
        <div className="text-xl font-bold mb-1">Kushagra [Name]</div>
        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-10">
          Interaction Designer • Western Union
        </div>

        <div
          className="flex gap-8 justify-center text-sm font-bold uppercase tracking-widest"
          style={{ color: ACCENT_COLOR }}
        >
          <span>Portfolio</span>
          <span>LinkedIn</span>
          <span>Email</span>
        </div>
      </div>
    </Slide>,
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-8 font-sans">
      <div className="w-full max-w-6xl relative">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden ring-1 ring-black/5">
          {slides[currentSlide]}
        </div>

        <div className="absolute top-1/2 -left-20 -translate-y-1/2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-full bg-white shadow-lg transition-all ${
              currentSlide === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:scale-110 active:scale-95'
            }`}
          >
            <ChevronLeft size={24} style={{ color: ACCENT_COLOR }} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2">
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded-full bg-white shadow-lg transition-all ${
              currentSlide === slides.length - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:scale-110 active:scale-95'
            }`}
          >
            <ChevronRight size={24} style={{ color: ACCENT_COLOR }} />
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <div className="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 shadow-sm ring-1 ring-black/5">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 shadow-sm ring-1 ring-black/5">
          Use ← → Arrows or Space to Navigate
        </div>
      </div>
    </div>
  );
}
