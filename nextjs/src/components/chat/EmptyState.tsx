'use client';

import { CheckCircle, ScrollText, Bot } from 'lucide-react';

/**
 * EmptyState - AI Goal Planner welcome screen
 * Extracted from ChatMessagesView empty state section
 * Displays when no messages exist in the current session
 */
export function EmptyState(): React.JSX.Element {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center min-h-[60vh]">
      <div className="max-w-4xl w-full space-y-8">
        {/* Main header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <ScrollText className="w-6 h-6 text-green-500" />
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-500" />
            </div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">Niyam AI</h1>
          <p className="text-xl text-neutral-300">Powered by Google Gemini</p>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Transform your healthcare testing goals into actionable plans with intelligent PRD analysis, automated reviews, and structured task creation to accelerate success.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto">
              <ScrollText className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-green-400">Upload PRD</h3>
            <p className="text-sm text-neutral-400">
              Share the Product Requirement Document for test-case generation
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto">
              <Bot className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-blue-400">AI Review</h3>
            <p className="text-sm text-neutral-400">
              Agent analyzes PRD, and drafts scenarios
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-purple-400">Create Tasks</h3>
            <p className="text-sm text-neutral-400">
              Auto-generate and push test-case tasks into your Jira account
            </p>
          </div>
        </div>

        {/* Try asking about section */}
        {/* <div className="space-y-4">
          <p className="text-neutral-400">Try asking about:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
              Goal setting strategies
            </span>
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
              Project planning methods
            </span>
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
              Task prioritization
            </span>
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
              Achievement milestones
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
