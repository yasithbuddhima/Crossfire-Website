import { supabase } from "../supabase";

export async function uploadFile(file, id) {
  try {
    // Create file path
    const fileExt = file.name.split(".").pop();
    const fileName = `${id}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload
    const { error: uploadError } = await supabase.storage
      .from("payment-slips")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get Public URL
    const { data: publicURLData } = supabase.storage
      .from("payment-slips")
      .getPublicUrl(filePath);
    // Return public URL
    return publicURLData.publicUrl;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
