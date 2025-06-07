import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, feedbackType, message } = body;

    // 在實際應用中，這裡會將數據存儲到數據庫
    // 例如使用 Cloudflare D1 或其他數據存儲服務
    console.log('Received feedback:', { name, email, feedbackType, message });

    // 模擬處理延遲
    await new Promise(resolve => setTimeout(resolve, 500));

    // 返回成功響應
    return NextResponse.json({ success: true, message: '反饋已成功提交' });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { success: false, message: '提交反饋時發生錯誤' },
      { status: 500 }
    );
  }
}
