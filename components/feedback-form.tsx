"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "姓名至少需要2个字符",
  }),
  email: z.string().email({
    message: "请输入有效的电子邮件地址",
  }),
  feedbackType: z.string({
    required_error: "请选择反馈类型",
  }),
  message: z.string().min(10, {
    message: "反馈内容至少需要10个字符",
  }),
})

export function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      // 这里将来会添加实际的API调用
      console.log(values)
      
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "反馈已提交",
        description: "感谢您的反馈，我们会认真考虑您的建议！",
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "提交失败",
        description: "提交反馈时出现错误，请稍后再试。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>姓名</FormLabel>
              <FormControl>
                <Input placeholder="请输入您的姓名" {...field} />
              </FormControl>
              <FormDescription>
                您的姓名将用于我们回复您的反馈。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>电子邮件</FormLabel>
              <FormControl>
                <Input placeholder="请输入您的电子邮件" {...field} />
              </FormControl>
              <FormDescription>
                我们不会向您发送垃圾邮件。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="feedbackType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>反馈类型</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择反馈类型" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bug">问题报告</SelectItem>
                  <SelectItem value="feature">功能建议</SelectItem>
                  <SelectItem value="improvement">改进建议</SelectItem>
                  <SelectItem value="other">其他</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                请选择最符合您反馈内容的类型。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>反馈内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="请详细描述您的反馈内容..."
                  className="resize-none min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                请尽可能详细地描述您的反馈，这将帮助我们更好地理解和解决问题。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          提交反馈
        </Button>
      </form>
    </Form>
  )
}
