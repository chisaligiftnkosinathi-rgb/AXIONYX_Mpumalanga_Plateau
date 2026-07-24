import json
import logging
from typing import Dict, Any

class RenderQueue:
    """
    AXIONYX Render Queue
    Asynchronously pulls Render Requests (usually triggered by a Replay Package or Studio click)
    and dispatches them to the available Workers.
    """
    def __init__(self):
        self.queue = []
        logging.basicConfig(level=logging.INFO)

    def submit_job(self, render_graph_path: str, output_format: str):
        job = {
            "status": "QUEUED",
            "graph": render_graph_path,
            "format": output_format
        }
        self.queue.append(job)
        logging.info(f"Job queued: {render_graph_path} -> {output_format}")
        return job

    def process_next(self):
        if not self.queue:
            return None
        job = self.queue.pop(0)
        job['status'] = "PROCESSING"
        # In reality: Dispatch to Celery / Redis worker mapping to Composer.py
        logging.info(f"Processing job: {job['graph']}")
        return job
