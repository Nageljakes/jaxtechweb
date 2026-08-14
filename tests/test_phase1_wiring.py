from pathlib import Path

ROOT = Path(__file__).parents[1]


def test_phase_one_stack_proof_is_user_triggered() -> None:
    html = (ROOT / "index.html").read_text()
    script = (ROOT / "script.js").read_text()

    assert 'id="tiny-stack-proof"' in html
    assert 'id="tiny-stack-status"' in html
    assert "https://jaxtech-tiny-phase1-360338025767.us-central1.run.app" in script
    assert "'/api/agent/prove'" in script
    assert "GOOGLE_STACK_ORIGIN + '/api/chat'" in script
    assert "Prove Google stack" in html
