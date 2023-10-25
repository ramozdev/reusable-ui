import { Input } from "@/ui/html/input";
import * as Button from "@/ui/html/button";
import * as A from "@/ui/html/anchor";
import { Label } from "@/ui/html/label";
import { Card } from "@/ui/html/card";
import { Textarea } from "@/ui/html/textarea";

export default function Form() {
  return (
    <form>
      <div className="container mx-auto flex px-5 py-24">
        <Card>
          <h2>Feedback</h2>
          <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div className="relative mb-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <Textarea id="message" name="message"></Textarea>
          </div>
          <Button.Solid type="button">Continue</Button.Solid>
          <p>
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </Card>
      </div>
      <Button.Subtle type="button">Sign in with Github</Button.Subtle>
      <p>
        By clicking continue, you agree to our{" "}
        <A.Underline href="#">Terms of Service</A.Underline> and{" "}
        <A.Underline>Privacy Policy</A.Underline>.
      </p>
    </form>
  );
}
