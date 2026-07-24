import os
import shutil
import json
from datetime import datetime

class RenderBundler:
    """
    AXIONYX Render Bundler
    Ensures every generated media asset is packaged into a versioned, reproducible render bundle.
    """
    def __init__(self, output_dir: str = "renders/"):
        self.output_dir = output_dir

    def create_bundle(self, scenario_name: str, audience: str, assets: dict) -> str:
        timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        bundle_id = f"{scenario_name}_{audience}_{timestamp}"
        bundle_path = os.path.join(self.output_dir, bundle_id)
        
        os.makedirs(bundle_path, exist_ok=True)

        manifest = {
            "bundle_id": bundle_id,
            "scenario": scenario_name,
            "audience": audience,
            "generated_at": timestamp,
            "assets_included": list(assets.keys())
        }

        with open(os.path.join(bundle_path, "manifest.json"), "w") as f:
            json.dump(manifest, f, indent=2)

        for asset_name, asset_path in assets.items():
            if os.path.exists(asset_path):
                shutil.copy(asset_path, bundle_path)

        return bundle_path
