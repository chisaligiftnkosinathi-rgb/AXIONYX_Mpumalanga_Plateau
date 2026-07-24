import { Storyboard } from '@axionyx/narrative-engine/src/Storyboard';
import * as fs from 'fs';

export class MarkdownRenderer {
  
  /**
   * Transforms the canonical Storyboard into a readable Markdown artifact.
   * This is one of many potential renderers (HTML, Video, Slides).
   */
  render(storyboard: Storyboard, outputPath: string): void {
    let md = `# ${storyboard.story.title}\n`;
    md += `**Target Audience:** ${storyboard.story.audience}\n`;
    md += `**Estimated Duration:** ${storyboard.story.durationSeconds}s\n\n`;
    md += `---\n\n`;

    for (const [index, scene] of storyboard.scenes.entries()) {
      md += `## Scene ${index + 1}: ${scene.title}\n\n`;
      
      md += `> **Narration (TTS):** "${scene.narration}"\n\n`;
      
      md += `**Visual Assets Required:**\n`;
      scene.visuals.forEach(v => md += `- ${v}\n`);
      md += `\n`;
      
      md += `**Evidence Traceability:**\n`;
      scene.evidenceRefs.forEach(e => md += `- \`${e}\`\n`);
      
      md += `\n---\n\n`;
    }

    fs.writeFileSync(outputPath, md);
    console.log(`[MarkdownRenderer] Successfully rendered Storyboard to ${outputPath}`);
  }
}
