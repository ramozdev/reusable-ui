import Select from "@/ui/html/select";

export function SelectDemo() {
  return (
    <>
      <label className="sr-only" htmlFor="marital-status">
        Marital Status
      </label>
      <Select required name="marital-status" id="marital-status">
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="widowed">Widowed</option>
      </Select>
    </>
  );
}
