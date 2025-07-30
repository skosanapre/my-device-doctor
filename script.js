
const solutions = {
  slow: [
    "Uninstall unused programs.",
    "Disable startup apps.",
    "Run Disk Cleanup.",
    "Check for malware using antivirus.",
    "Upgrade RAM if possible."
  ],
  "auto-repair": [
    "Restart your PC and press F8 or Shift+F8.",
    "Select 'Advanced Options' then 'Startup Repair'.",
    "Boot from USB and run 'bootrec /fixboot'.",
    "If not resolved, reset the PC from recovery."
  ],
  "no-boot": [
    "Check battery or power cable.",
    "Remove external drives and restart.",
    "Enter BIOS and check boot order.",
    "Boot from recovery USB and reinstall Windows."
  ],
  wifi: [
    "Turn Wi-Fi off and back on.",
    "Forget and reconnect to the network.",
    "Update Wi-Fi adapter drivers.",
    "Restart the router.",
    "Run network troubleshooter."
  ]
};

document.getElementById("problem-select").addEventListener("change", function () {
  const selected = this.value;
  const solutionBox = document.getElementById("solution-box");
  const list = document.getElementById("solution-list");

  list.innerHTML = "";

  if (solutions[selected]) {
    solutions[selected].forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      list.appendChild(li);
    });
    solutionBox.classList.remove("hidden");
  } else {
    solutionBox.classList.add("hidden");
  }
});
