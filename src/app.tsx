import "./reset.css";
import css from "./app.module.css";
import { ToastProvider } from "./done/toast/toast.react";
import { ToastExample } from "./done/toast/toast.example";

import { useState } from "react";

import { CheckboxTreeExample } from "./done/nested-checkboxes/checkboxes.example";
import { AccordionExample } from "./done/accordion/accordion.example";
import { TabsExample } from "./done/tabs/tabs.example";
import { TooltipExample } from "./done/tooltip/tooltip.example";
import { TableExample } from "./done/table/table.example";
import { Markdown } from "./done/markdown/markdown.react";
import { MarkdownExample } from "./done/markdown/markdown.example";
import { ProgressBarExample } from "./done/progress-bar/progress-bar.example";
import { SquareGameExample } from "./done/square-game/square-game.example";
import { UploadComponentExample } from "./done/upload-component/upload-component.example";
import { InfiniteCanvasExample } from "./done/infinite-canvas/infinite-canvas.example";
import { GalleryExample } from "./done/gallery/gallery.example";
import { GPTComponentExample } from "./done/gpt-chat/gpt-chat.example";
import { HeatmapExample } from "./done/heatmap/heatmap.example";
import { HeatmapCanvasExample } from './done/heatmap-canvas/heatmap-canvas.example';
import { RedditThreadExample } from "./done/reddit-thread/reddit-thread.example";
import { StarRatingExample, StarRatingVanillaExample } from "./done/star-rating/star-rating.example";
import { VideoPlayerExample } from "./done/video-player/video-player.example";

// Import problem markdown files (Bun text imports)
import toastProblem from "./done/toast/problem.md" with { type: 'text' };
import checkboxProblem from "./done/nested-checkboxes/problem.md" with { type: 'text' };
import accordionProblem from "./done/accordion/problem.md" with { type: 'text' };
import tabsProblem from "./done/tabs/problem.md" with { type: 'text' };
import tooltipProblem from "./done/tooltip/problem.md" with { type: 'text' };
import tableProblem from "./done/table/problem.md" with { type: 'text' };
import markdownProblem from "./done/markdown/problem.md" with { type: 'text' };
import squareGameProblem from "./done/square-game/problem.md" with { type: 'text' };
import progressBarProblem from "./done/progress-bar/problem.md" with { type: 'text' };
import uploadComponentProblem from "./done/upload-component/problem.md" with { type: 'text' };
import infiniteCanvasProblem from "./done/infinite-canvas/problem.md" with { type: 'text' };
import galleryProblem from "./done/gallery/problem.md" with { type: 'text' };
import gptChatProblem from "./done/gpt-chat/problem.md" with { type: 'text' };
import heatmapProblem from "./done/heatmap/problem.md" with { type: 'text' };
import heatmapCanvasProblem from "./done/heatmap-canvas/problem.md" with { type: 'text' };
import redditThreadProblem from "./done/reddit-thread/problem.md" with { type: 'text' };
import starRatingProblem from "./done/star-rating/problem.md" with { type: 'text' };
import videoPlayerProblem from "./done/video-player/problem.md" with { type: 'text' };

// Helper to create a problem overview component
const createProblemOverview = (markdownContent: string) => {
    return () => (
        <div className={css.markdownContent} style={{ padding: '20px' }}>
            <Markdown text={markdownContent} />
        </div>
    );
};

type TDifficulty = 'warm-up' | 'easy' | 'medium' | 'hard' | 'extreme';
type TVariantType = 'overview' | 'react' | 'vanilla';

type TVariant = {
    component: React.ComponentType;
};

type TProblem = {
    id: string;
    name: string;
    difficulty: TDifficulty;
    variants: Partial<Record<TVariantType, TVariant>>;
};

const SECTIONS = {
    javascriptProblems: {
        title: "Javascript Problems",
        items: {} as Record<string, TProblem>,
    },
    components: {
        title: "Components",
        items: {
            toast: {
                id: "toast",
                name: "Toast",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(toastProblem) },
                    react: { component: ToastExample },
                },
            },
            checkbox: {
                id: "checkbox",
                name: "Checkbox",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(checkboxProblem) },
                    react: { component: CheckboxTreeExample },
                },
            },
            accordion: {
                id: "accordion",
                name: "Accordion",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(accordionProblem) },
                    react: { component: AccordionExample },
                },
            },
            tabs: {
                id: "tabs",
                name: "Tabs",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(tabsProblem) },
                    react: { component: TabsExample },
                },
            },
            tooltip: {
                id: "tooltip",
                name: "Tooltip",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(tooltipProblem) },
                    react: { component: TooltipExample },
                },
            },
            table: {
                id: "table",
                name: "Table",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(tableProblem) },
                    react: { component: TableExample },
                },
            },
            markdown: {
                id: "markdown",
                name: "Markdown",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(markdownProblem) },
                    react: { component: MarkdownExample },
                },
            },
            squareGame: {
                id: "squareGame",
                name: "Square Game",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(squareGameProblem) },
                    react: { component: SquareGameExample },
                },
            },
            progressBar: {
                id: "progressBar",
                name: "Progress Bar",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(progressBarProblem) },
                    react: { component: ProgressBarExample },
                },
            },
            uploadComponent: {
                id: "uploadComponent",
                name: "Upload Component",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(uploadComponentProblem) },
                    react: { component: UploadComponentExample },
                },
            },
            infiniteCanvas: {
                id: "infiniteCanvas",
                name: "Infinite Canvas",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(infiniteCanvasProblem) },
                    react: { component: InfiniteCanvasExample },
                },
            },
            gallery: {
                id: "gallery",
                name: "Gallery",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(galleryProblem) },
                    react: { component: GalleryExample },
                },
            },
            gptChat: {
                id: "gptChat",
                name: "GPT Chat",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(gptChatProblem) },
                    react: { component: GPTComponentExample },
                },
            },
            heatmap: {
                id: "heatmap",
                name: "Heatmap",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(heatmapProblem) },
                    react: { component: HeatmapExample },
                },
            },
            heatmapCanvas: {
                id: "heatmapCanvas",
                name: "Heatmap Canvas",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(heatmapCanvasProblem) },
                    react: { component: HeatmapCanvasExample },
                },
            },
            redditThread: {
                id: "redditThread",
                name: "Reddit Thread",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(redditThreadProblem) },
                    react: { component: RedditThreadExample },
                },
            },
            starRating: {
                id: "starRating",
                name: "Star Rating",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(starRatingProblem) },
                    react: { component: StarRatingExample },
                    vanilla: { component: StarRatingVanillaExample },
                },
            },
            videoPlayer: {
                id: "videoPlayer",
                name: "Video Player",
                difficulty: "easy",
                variants: {
                    overview: { component: createProblemOverview(videoPlayerProblem) },
                    react: { component: VideoPlayerExample },
                },
            },
        } as Record<string, TProblem>,
    },
    typescriptProblems: {
        title: "Typescript Problems",
        items: {} as Record<string, TProblem>,
    },
} as const;

// Helper to find a component by selection id (format: "problemId:variant")
const findComponentBySelection = (selectionId: string): React.ComponentType | undefined => {
    const [problemId, variant] = selectionId.split(':') as [string, TVariantType];
    for (const section of Object.values(SECTIONS)) {
        if (problemId in section.items) {
            const problem = section.items[problemId as keyof typeof section.items] as TProblem;
            return problem.variants[variant]?.component;
        }
    }
    return undefined;
};

// Check if a selection id is valid
const isValidSelection = (selectionId: string): boolean => {
    return findComponentBySelection(selectionId) !== undefined;
};

export default function App() {
    // Read initial selection from URL param
    const getInitialExample = (): string => {
        const params = new URLSearchParams(window.location.search);
        const example = params.get('example');
        if (example && isValidSelection(example)) {
            return example;
        }
        return "tabs:react";
    };

    const [selectedId, setSelectedId] = useState<string>(getInitialExample);
    const ExampleComponent = findComponentBySelection(selectedId) ?? (() => <div>Not found</div>);

    // Update URL when selection changes
    const handleSelectVariant = (problemId: string, variant: TVariantType) => {
        const newId = `${problemId}:${variant}`;
        setSelectedId(newId);
        const url = new URL(window.location.href);
        url.searchParams.set('example', newId);
        window.history.replaceState({}, '', url.toString());
    };

    return (
        <div className={css.app}>
            <div className={css.container}>
                <div className={css.sidebar}>
                    {Object.entries(SECTIONS).map(([sectionKey, section]) => (
                        <div key={sectionKey} className={css.sidebarSection}>
                            <h4 className={css.sectionTitle}>{section.title}</h4>
                            {Object.keys(section.items).length === 0 ? (
                                <p className={css.emptySection}>No items yet</p>
                            ) : (
                                <ul className={css.problemList}>
                                    {Object.entries(section.items).map(([problemId, problem]) => (
                                        <li key={problemId} className={css.problemItem}>
                                            <div className={css.problemHeader}>
                                                <span className={css.problemName}>{problem.name}</span>
                                                <span className={`${css.chip} ${css[problem.difficulty]}`}>
                                                    {problem.difficulty}
                                                </span>
                                            </div>
                                            <ul className={css.variantList}>
                                                {(Object.keys(problem.variants) as TVariantType[]).map((variant) => (
                                                    <li key={variant}>
                                                        <button
                                                            className={selectedId === `${problemId}:${variant}` ? css.active : ""}
                                                            onClick={() => handleSelectVariant(problemId, variant)}
                                                        >
                                                            {variant === 'overview' ? 'Problem Overview' : variant === 'react' ? 'React' : 'Vanilla'}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                <div className={css.content}>
                    <div id="toast-container" className={css.toastContainer}></div>
                    <ToastProvider target="#toast-container">
                        <ExampleComponent />
                    </ToastProvider>
                </div>
            </div>
        </div>
    );
}


